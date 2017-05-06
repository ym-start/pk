import axios from 'axios'

export default {
  git:(param)=>{
    axios({
      url:param.url,
      method:param.method
    })
    .then(function(res){
      param.callback(res)
    })
  }
}
