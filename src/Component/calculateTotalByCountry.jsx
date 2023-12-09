const calculateTotalByCountry = (universities) => {
    const universitiesByCountry = {};
    universities.forEach((university) => {
      if (universitiesByCountry[university.country]) {
        universitiesByCountry[university.country]++;
      } else {
        universitiesByCountry[university.country] = 1;
      }
    });
    return universitiesByCountry;
  };
  export default calculateTotalByCountry;