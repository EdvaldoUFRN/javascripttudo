//funções em arrays.
//posso criar um array de funções para serem executadas.

let valores = [1, 2,3]
const op = [
    (val) => {
        let res = 0
        for (v of val) {
            res += v
        }
        return res
    },
    (val) => {
        let res = 1
        for (v of val) {
            res *= v
        }
        return res
    },
    (val) => {
        for (v of val) {
            console.log(v)
        }
    }
]
//Number() vai fazer um cast, mudando para numero.
op[2](valores)
