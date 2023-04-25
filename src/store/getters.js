import  $constData from '@/config/constData.js'

const getters = {
  themeColor: state => {
    let theme = state.base.themeColor
    if(!theme){
      theme = $constData.themeList.filter((item) => item.name === 'hx')[0]
    }
    return theme
  }
}
export default getters