export const splitNumber = (num) => {
    const points = Array.from({ length: 5 }, () => Math.random() * num)
      .sort((a, b) => a - b);
    
    const boundaries = [0, ...points, num];
    
    const result = [];
    for (let i = 1; i < boundaries.length; i++) {
      const value = boundaries[i] - boundaries[i - 1];
      result.push(Number(value.toFixed(2)));
    }
  
    const sum = result.reduce((acc, val) => acc + val, 0);
    const diff = Number((num - sum).toFixed(2));
    if (diff !== 0) {
      result[0] = Number((result[0] + diff).toFixed(2));
    }
  
    return result;
  }