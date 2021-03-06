/*
   * The function assumes that there are at least two elements in array. The
   * function returns a negative value if the array is sorted in decreasing order.
   * Returns 0 if elements are equal
   */
class MaximumDiffrence {
  int maxDiff(int arr[], int arr_size) {
    int max_diff = arr[1] - arr[0];
    int i, j;
    for (i = 0; i < arr_size; i++) {
      for (j = i + 1; j < arr_size; j++) {
        if (arr[j] - arr[i] > max_diff)
          max_diff = arr[j] - arr[i];
      }
    }
    return max_diff;
  }
}

/* Driver program to test above functions */
public class mettle {
  public static void main(String[] args) {
    MaximumDiffrence maxdif = new MaximumDiffrence();
    int arr[] = { 2, 3, 10, 6, 4, 8, 1 };
    System.out.println("Maximum differnce is " + maxdif.maxDiff(arr, 5));
  }
}