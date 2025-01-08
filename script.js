for(let i = 0; i <= 10; i++){
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
  .then(function (resp) {
    console.log(resp.data.response);
  })
}
    
