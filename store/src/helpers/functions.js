export const sortByDate = (data,dateCol = "createdAt") => {
   const sortedData =data.sort((a, b) => new Date(...b[dateCol].split('/').reverse()) - new Date(...a[dateCol].split('/').reverse()));
   return sortedData
}

