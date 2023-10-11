
Partial Class Webhook_AtualizarPagamentoLead
    Inherits System.Web.UI.Page
    Private Sub Webhook_AtualizarPagamentoLead_Load(sender As Object, e As EventArgs) Handles Me.Load

        If Not Page.IsPostBack Then

            Dim iAtitude As New Atitude()

            Dim IDPagamento As Integer = 0
            If IsNumeric(Request.QueryString("IDPagamento")) Then
                IDPagamento = Request.QueryString("IDPagamento")
            End If
            'ChargeStatus, ChargeUpdatedAt, TransactionsInstallment,TransactionsStatus, TransactionsStatusDescricao
            'TransactionPayday

            Dim ChargeStatus As String = ""
            If Not Request.QueryString("ChargeStatus") = Nothing Then
                ChargeStatus = Request.QueryString("ChargeStatus")
            End If

            Dim ChargeUpdatedAt As Date = "01/01/1900"
            If IsDate(Request.QueryString("ChargeUpdatedAt")) Then
                ChargeUpdatedAt = Request.QueryString("ChargeUpdatedAt")
            End If

            Dim TransactionsPayDay As Date = "01/01/1900"
            If IsDate(Request.QueryString("TransactionsPayDay")) Then
                TransactionsPayDay = Request.QueryString("TransactionsPayDay")
            End If

            Dim TransactionsInstallment As String = ""
            If Not Request.QueryString("TransactionsInstallment") = Nothing Then
                TransactionsInstallment = Request.QueryString("TransactionsInstallment")
            End If

            Dim TransactionsStatus As String = ""
            If Not Request.QueryString("TransactionsStatus") = Nothing Then
                TransactionsStatus = Request.QueryString("TransactionsStatus")
            End If

            Dim TransactionsStatusDescricao As String = ""
            If Not Request.QueryString("TransactionsStatusDescricao") = Nothing Then
                TransactionsStatusDescricao = Request.QueryString("TransactionsStatusDescricao")
            End If

            Dim HashCode As String = ""
            If Not Request.QueryString("HashCode") = Nothing Then
                HashCode = Request.QueryString("HashCode")
            End If

            Dim Salvar As String = iAtitude.AtualizarStatusPagamentoLead(IDPagamento, ChargeStatus, ChargeUpdatedAt, TransactionsPayDay, TransactionsInstallment, TransactionsStatus, TransactionsStatusDescricao, HashCode)

            iAtitude = Nothing

            Response.Write(Salvar)

        End If

    End Sub
End Class
