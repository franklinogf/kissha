/* ----- create the set cols for the update query and return the values ----- */

const updateQuery = (data) =>  {
   let whereValues = []
   let colQuery = ''

   let index = 0;
   for (col in data) {
      whereValues.push(data[col]);
      const coma = index === 0 ? '' : ', '
      colQuery += `${coma}${col} = ?`
      index++
   }
   return [colQuery,whereValues]
}

/* ----------------- returns the insert query and the values ---------------- */

const insertQuery = (data) =>  {
   let whereValues = []
   let colQuery = ''
   let valuesQuery = ''

   let index = 0;
   for (col in data) {
      whereValues.push(data[col]);
      const coma = index === 0 ? '' : ', '
      colQuery += `${coma}${col}`
      valuesQuery += `${coma}?`
      index++
   }
   const query = `(${query}) VALUES (${valuesQuery})`
   return [query,whereValues]
}

module.exports = {
   updateQuery,
   insertQuery
};