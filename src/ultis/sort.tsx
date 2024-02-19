// sort của 1 mảng theo 1 mảng khác theo key
export function sortByArrayOrder(arr1: Array<any>, arr2: Array<any>, key: string= '_id'):Array<any> {
  // Sử dụng slice để tạo bản sao của mảng thứ nhất để không ảnh hưởng đến mảng gốc
  const clonedArr1 = [...arr1];

  // Sắp xếp mảng thứ nhất dựa trên vị trí của mỗi phần tử trong mảng thứ hai
  clonedArr1.sort((a, b) => {
    const indexA = arr2.indexOf(a[key]);
    const indexB = arr2.indexOf(b[key]);
    return indexA - indexB;
  });

  return clonedArr1;
}