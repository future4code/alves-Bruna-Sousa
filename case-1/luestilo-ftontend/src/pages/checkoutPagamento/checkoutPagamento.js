import React from "react";
import { useNavigate } from "react-router-dom";
import { GlobalStyle } from "../../Global/GlobalStyle"
import { goBack } from "../../router/coordinator";
import x from "../../assets/x.png";
import * as C from './styled'


const CheckoutPagamento = () => {
    const navigate = useNavigate()
    return (
        <C.ContainerPagamento>
            <GlobalStyle />
            <header>
                <img onClick={() => goBack(navigate)} src={x}></img>
            </header>
            <div>
                <C.H1>Finalizar compra</C.H1>
                <C.H2>Confira as informações abaixo antes de finalizar a compra do produto</C.H2>
            </div>
            <C.Cards>
                <C.Card>
                    <C.H2>Pagar pelo pix (No número 99 99999-9999 informar seu número na descrição do pagamento.)</C.H2>
                    <C.PaymentCard>
                        <input type="checkbox" id="pix" name="pix" />
                        <label for="pix">Pix</label>
                    </C.PaymentCard>

                </C.Card>
                <C.Card>
                    <C.H2>Pagar na entrega do seu endereço.</C.H2>
                    <C.PaymentCard>
                        <input type="checkbox" id="Cartao" name="Cartao" />
                        <label for="pix">Cartão de crédito</label>
                    </C.PaymentCard>
                    <C.PaymentCard>
                        <input type="checkbox" id="Dinheiro" name="Dinheiro" />
                        <label for="Dinheiro">Dinheiro</label>
                    </C.PaymentCard>
                    <C.FinalizeOrder>Finalizar</C.FinalizeOrder>
                </C.Card>
            </C.Cards>
        </C.ContainerPagamento>
    )
}

export default CheckoutPagamento