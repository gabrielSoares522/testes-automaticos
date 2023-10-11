Imports System
Imports System.IO
Imports System.Data
Imports System.Data.SqlClient
Imports System.Net.Mail
Imports System.Collections.Generic
Imports System.Web.Script.Serialization
Imports RestSharp.Extensions
Imports System.Net
Imports System.Text
Imports RestSharp
Imports Newtonsoft.Json
Imports Newtonsoft.Json.Linq
Imports DAL
Imports Models
Imports System.Linq
Imports Microsoft.VisualBasic

Partial Class Webhook_GalaxiPay
    Inherits System.Web.UI.Page

#Region "Facilidades"

    Private Function Retorna_ID_Mensagem(ByVal Nome_Mensagem As String) As Integer

        Dim Retorno As Integer = 0

        Dim oDb As New ConnBDC()
        Dim objConnection As SqlConnection = New SqlConnection(oDb.AbreConexaoSQL())

        Dim oCmd As SqlCommand
        Dim strSQL As String = "SELECT ID FROM Emails_Marketing WITH(NOLOCK) WHERE Nome = '" & Nome_Mensagem & "'"

        oCmd = New SqlCommand(strSQL, objConnection)
        oCmd.CommandType = CommandType.Text

        Try
            If objConnection.State = ConnectionState.Closed Then
                objConnection.Open()
            End If

            Dim DadosBusca As SqlDataReader = oCmd.ExecuteReader(CommandBehavior.CloseConnection)
            DadosBusca.Read()

            If DadosBusca.HasRows Then
                If Not IsDBNull(DadosBusca.Item("ID")) Then
                    Retorno = DadosBusca.Item("ID")
                End If
            End If

            DadosBusca.Close()

        Catch ex As Exception
            Alertas.Erro()
            LogErros.RegistraLog(ex.ToString)

        Finally
            'Fecha a conexao que foi aberta
            oCmd.Dispose()
            objConnection.Dispose()
            objConnection.Close()
            objConnection = Nothing
        End Try

        oDb = Nothing

        Return Retorno

    End Function

    Private Function RetornaNomeLead(ByVal IDLead As Integer) As String

        Dim Retorno As String = Nothing

        Dim lead As Lead = LeadDAO.GetInstance.BuscarbyId(IDLead)

        If lead Is Nothing Then
            Throw New ArgumentNullException("lead")
        End If

        Retorno = lead.Nome

        Return Retorno

    End Function

    Private Function RetornaTelefoneLead(ByVal IDLead As Integer) As String

        Dim Retorno As String = Nothing

        Dim contato As List(Of LeadContato) = LeadContatoDAO.GetInstance.BuscarbyIdLead(IDLead)

        If contato.Count > 0 Then
            Retorno = "55" & contato.First().Telefone.Replace(" ", "").Replace("(", "").Replace(")", "").Replace("-", "")
        End If

        Return Retorno

    End Function

#End Region

    Private Sub Webhook_GalaxiPay_Load(sender As Object, e As EventArgs) Handles Me.Load

        Dim identificadorFluxo As String = ConfigurationManager.AppSettings("identificadorFluxo")
        Dim blocoAprovado As String = ConfigurationManager.AppSettings("blocoAprovado")
        Dim blocoReprovado As String = ConfigurationManager.AppSettings("blocoReprovado")

        Dim ChatbotApiKey = ConfigurationManager.AppSettings("ChatbotApiKey")
        Dim GalaxPayHash = ConfigurationManager.AppSettings("GalaxPayHash")
        Dim dominioMedBlip = ConfigurationManager.AppSettings("dominioMedBlip")

        ChatbotApiKey = ChatbotApiKey.Replace(" ", "%20")
        Dim memstream = New MemoryStream()

        Request.InputStream.Position = 0

        Request.InputStream.CopyTo(memstream)

        memstream.Position = 0

        Using reader As New StreamReader(memstream)

            Dim text = reader.ReadToEnd()

            If Not text.ToString = Nothing Then

                Dim json As Object
                Dim identificadorBotCliente As String = ""
                Dim pagamento As String = ""
                Dim statusPagamento As String = ""
                Dim idlead As Integer = 0
                Dim telefone As String = ""
                Dim nome_lead As String = ""

                Try

                    json = New JavaScriptSerializer().Deserialize(Of Object)(text)

                    Dim hashConfirmacao = json("confirmHash")
                    Dim dadosCliente As String() = New String(json("Charge")("additionalInfo")).Split(";")
                    statusPagamento = json("Transaction")("status")
                    pagamento = json("Charge")("mainPaymentMethodId")

                    identificadorBotCliente = dadosCliente(2)
                    idlead = Convert.ToInt32(dadosCliente(0))
                    nome_lead = RetornaNomeLead(idlead)
                    telefone = RetornaTelefoneLead(idlead)

                Catch ex As Exception
                    LogErros.RegistraLog(ex.ToString)

                End Try

                Dim StatusAprovado As String = "não definido"
                Dim StatusReprovado As String = "não definido"
                Dim IDMensagemAprovado As Integer = 1
                Dim IDMensagemReprovado As Integer = 2

                If pagamento = "creditcard" Then
                    StatusAprovado = "authorized"
                    StatusReprovado = "denied"
                End If

                If pagamento = "pix" Then
                    StatusAprovado = "payedPix"
                    StatusReprovado = "unavailablePix"
                End If
                If pagamento = "boleto" Then
                    StatusAprovado = "payedBoleto"
                    StatusReprovado = "notCompensated"
                End If
                Dim corpoString = "{ ""id"": """ & Guid.NewGuid().ToString() & """, ""to"": ""postmaster@msging.net"", ""method"": ""set"", ""uri"": ""/contexts/" & identificadorBotCliente & "/IDConsulta"", ""type"": ""plain/text"", ""resource"": """ & text & """ }"

                enviarComandoBlip(dominioMedBlip & "/commands", corpoString, ChatbotApiKey)

                If (statusPagamento = StatusAprovado) Then
                    AlterarLocalizacaoFluxo(ChatbotApiKey, identificadorBotCliente, identificadorFluxo, blocoAprovado)
                    EnviarNotificacao(idlead, telefone, IDMensagemAprovado, "Nome_Prospect", "", "", "", "", nome_lead, "", "", "", "", "", "")
                End If

                If (statusPagamento = StatusReprovado) Then
                    AlterarLocalizacaoFluxo(ChatbotApiKey, identificadorBotCliente, identificadorFluxo, blocoReprovado)
                    EnviarNotificacao(idlead, telefone, IDMensagemReprovado, "Nome_Prospect", "", "", "", "", nome_lead, "", "", "", "", "", "")
                End If


            End If

        End Using
    End Sub

    Public Shared Function enviarComandoBlip(Url As String, corpoString As String, Authorization As String) As Object
        Dim webClient As New WebClient
        ServicePointManager.SecurityProtocol = CType(3072, SecurityProtocolType)

        webClient.Headers.Add("Authorization", Authorization)
        webClient.Headers.Add("Content-Type", "application/json")
        Dim result As String = webClient.UploadString(Url, corpoString)
        LogErros.RegistraLog(result)
        Dim objDictionary = JsonConvert.DeserializeObject(Of Object)(result)

        Return objDictionary
    End Function

    Public Shared Function AlterarLocalizacaoFluxo(ChatbotApiKey As String, identificadorCliente As String, identificadorFluxo As String, estado As String) As IList(Of Dictionary(Of String, Object))

        Dim Url = ConfigurationManager.AppSettings("Izy_Api")

        Dim webClient As New WebClient

        ServicePointManager.SecurityProtocol = CType(3072, SecurityProtocolType)

        Dim dados As NameValueCollection = New NameValueCollection

        Dim result() As Byte = webClient.UploadValues(Url & "/api/Blip/WhatsApp/Localizacao/Alterar?ApiKey=" & ChatbotApiKey & "&ContactId=" & identificadorCliente & "&FlowId=" & identificadorFluxo & "&StateId=" & estado, dados)

        Return Nothing

    End Function

    Private Function EnviarNotificacao(ID As Integer, Telefone As String, IDMensagem As Integer, Param_1 As String, Param_2 As String, Param_3 As String, Param_4 As String, Param_5 As String, Campo_1 As String, Campo_2 As String, Campo_3 As String, Campo_4 As String, Campo_5 As String, Operador As String, Link As String) As Boolean

        Dim Retorno As Boolean = False

        Dim bdConnection = New ConnBDC()
        Dim sqlConnection = New SqlConnection(bdConnection.AbreConexaoSQL())

        Try

            If sqlConnection.State = ConnectionState.Closed Then
                sqlConnection.Open()
            End If

            Dim strSQL As String = "usp_notificacoes_whatsapp_avulsa " & ID & ", '" & Telefone & "', " & IDMensagem & ", " & "'" & Param_1 & "', '" & Param_2 & "', '" & Param_3 & "', '" & Param_4 & "', '" & Param_5 & "', " & "'" & Campo_1 & "', '" & Campo_2 & "', '" & Campo_3 & "', '" & Campo_4 & "', '" & Campo_5 & "', '" & Operador & "', " & "'" & Link & "'"

            Dim table = New DataTable()

            Using sqlCommand = New SqlCommand(strSQL, sqlConnection)
                Using adapter = New SqlDataAdapter(sqlCommand)
                    adapter.Fill(table)
                End Using
            End Using

            Dim stringTable = JsonConvert.SerializeObject(table)

            Dim array = JArray.Parse(stringTable)

            For Each row In array

                Dim tokenStr = IzyApiService.GetSecurityToken(row("guid_contratante"))
                Dim token = JObject.Parse(tokenStr)

                Dim SaldoNotificacao As Integer = IzyApiService.VerificaSaldoNotificacao(token("token").ToString())

                If SaldoNotificacao > 0 Then
                    If Not Link = Nothing Then
                        IzyApiService.EnviaNotificacaoExteriorImagem(row.ToString(), token("token").ToString())
                    Else
                        IzyApiService.EnviaNotificacaoExterior(row.ToString(), token("token").ToString())
                    End If
                    Retorno = True
                Else
                    Alertas.Atencao(mensagem:="Você não tem créditos para envio de notificações!")
                    Retorno = False
                End If

            Next

            sqlConnection.Close()

        Catch ex As Exception
            Alertas.Erro()
            LogErros.RegistraLog(ex.ToString)
            Retorno = False
        End Try

        Return Retorno

    End Function


End Class
