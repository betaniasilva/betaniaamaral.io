export const accountYearsWork = () => {
  const startYearsWork = 2021
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1

  const actualYear = year - startYearsWork 

  
  if(actualYear <= 0){
    const dateFormatted = `${month} meses`

    return dateFormatted
  } else {
    const dateFormatted = `${actualYear} ano e ${month} meses`

    return dateFormatted
  }
}