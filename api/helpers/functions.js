const Properties = (bodyData) =>{
   const properties = {}
   for (data in bodyData) {
      properties[data] = bodyData[data]
   }
   return properties
}

module.exports = {Properties}