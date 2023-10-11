
<WebMethod()>
    Public Function AtualizarStatusPagamentoLead(ByVal IDPagamento As Integer, ByVal ChargeStatus As String, ByVal ChargeUpdatedAt As Date, ByVal TransactionsPayDay As Date, ByVal TransactionsInstallment As String, ByVal TransactionsStatus As String, ByVal TransactionsStatusDescricao As String, ByVal HashCode As String) As String
        Dim RetornoMetodo As String = Nothing
        'ChargeStatus, ChargeUpdatedAt, TransactionsInstallment,TransactionsStatus, TransactionsStatusDescricao
        'TransactionPaydayDate
        Try
            If VerificaHashCode(HashCode) Then
                Dim oDb As New ConnBDC()
                Dim objConnection As SqlConnection = New SqlConnection(oDb.AbreConexaoSQL())

                Dim oCmd As SqlCommand
                Dim strSQL As String

                strSQL = "UPDATE Leads_Pagamentos"
                strSQL += "Set ChargeStatus='" & ChargeStatus & "',"
                strSQL += "ChargeUpdatedAt ='" & ChargeUpdatedAt & "', "
                strSQL += "TransactionsInstallment='" & TransactionsInstallment & "',"
                strSQL += "TransactionsStatus='" & TransactionsStatus & "',"
                strSQL += "TransactionsStatusDescricao='" & TransactionsStatusDescricao & "',"
                strSQL += "TransactionsPayDay='" & TransactionsPayDay & "'"
                strSQL += "WHERE Id=" & IDPagamento

                oCmd = New SqlCommand(strSQL, objConnection)

                Try
                    If objConnection.State = ConnectionState.Closed Then
                        objConnection.Open()
                    End If

                    oCmd.ExecuteNonQuery()

                    RetornoMetodo = "{""0"":""Pagamento atualizado com sucesso!""}"

                Catch oErr As Exception
                    LogErros.RegistraLog(oErr.ToString)

                    RetornoMetodo = "{""-1"":""Erro ao processar a informação!""}"

                Finally
                    'Fecha a conexao que foi aberta
                    oCmd.Dispose()
                    objConnection.Dispose()
                    objConnection.Close()
                    objConnection = Nothing
                End Try

                oDb = Nothing

            Else

                RetornoMetodo = "{""-1"":""Sem permissão para executar essa API!""}"

            End If

        Catch ex As Exception
            LogErros.RegistraLog(ex.ToString)

        End Try

        Return RetornoMetodo

    End Function