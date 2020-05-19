/* ----- create the set cols for the update query and return the values ----- */

const updateQuery = (data) =>  {
   let whereValues = []
   let updateQuery = ''

   let index = 0;
   for (col in data) {
      whereValues.push(data[col]);
      const coma = index === 0 ? '' : ', '
      updateQuery += `${coma}${col} = ?`
      index++
   }
   return [updateQuery,whereValues]
}


module.exports = updateQuery;