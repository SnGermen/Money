const Rates ={
    USD: 0.03,
    EUR: 0.02
}

function convert(UACH, currency) {
    if(!Rates[currency]){
        return ('Только долары либо евро');
    }

    return UACH * Rates[currency]

}