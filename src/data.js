window.filterFood = (users, search) => {
    let userFilter = users.filter(user => {
      return user.name.toUpperCase().indexOf(search.toUpperCase()) !== -1;
    });
    return filter;
  }

window.findingFood = (options) => {
    //console.log(options);
  
    const courses = Object.keys(options.cohort.coursesIndex);
    // console.log(courses)
    let estudents = computeUsersStats(options.cohortData.users, options.cohortData.progress, courses);
    //console.log(estudents);
  
    estudents = sortUsers(estudents, options.orderBy, options.orderDirection);
    //console.log(estudents);
  
    if (options.search !== '') { 
      estudents = filterUsers(estudents, options.search) 
    }
    //console.log(estudents); 
  
    return estudents; 
  }