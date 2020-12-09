$.ajax({
  type: "GET",
  url: "https://api.etherscan.io/api?module=transaction&action=getstatus&txhash='txhash'&apikey='apikey'",
  data: {
    apikey: $('K5NY67I7H54XAF1Z77WABV3E5MCKYMEM9F').val(),
    txhash: $('0x8c74373a8a500a4fa27d4b8314fa7bf73afcb4e6f640aae2955354465b062ce2').val()
  }
})
