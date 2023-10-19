// Function to convert a filename to a sortable string
export const convertNameToSortableString = (filename) =>{
  return filename.replace(/\d+/g, match => match.padStart(10, '0'));
}

// sort by A - Z
export const sortByNameAZ = (data) => {
    const result = data.sort((a, b) => {
      const aName = convertNameToSortableString(a.name);
      const bName = convertNameToSortableString(b.name);
      return aName.localeCompare(bName);
    });
    return result;
  };

  // sort by Z - A
  export  const sortByNameZA = (data) => {
    const result = data.sort((a, b) => {
      const aName = convertNameToSortableString(a.name);
      const bName = convertNameToSortableString(b.name);
      return bName.localeCompare(aName);
    });
    return result;
  };

  // sort by Z - A
  export const sortByCreatedAt = (data) => {
    const result = data.sort((a, b) => a.createdAt.localeCompare(b.createdAt));
    return result;
  };

  export const sortedItems = [
    { name: "createdAt", title: "Sort by created at" },
    { name: "nameASC", title: "Sort by name - asc" },
    { name: "nameDESC", title: "Sort by name - desc" },
  ];