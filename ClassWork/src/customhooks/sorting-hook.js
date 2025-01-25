export function useSort(data) {
    if (Array.isArray(data)) {
        // This will sort the array in ascending order (alphabetically if it's strings)
        return data.sort(); 
      } else {
        return "Not an Array";
      }
}