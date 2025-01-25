import { useSort } from "../customhooks/sorting-hook";

export function CustomSort () {
    const arr = ['A', 'D', 'E', 'B']
    const sortedArr = useSort(arr)
    console.log(sortedArr);
    

    return (
        <h3>
            {
                sortedArr.map(item => (
                    <span>{item} </span>
                ) )
            }
        </h3>
    )
}