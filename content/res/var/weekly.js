f=0;

f++;
window["type"+f] = "4";
window["des"+f] = ``;
window["q"+f] =`
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n - 1)

# Example usage
number = 5
result = factorial(number)
print(f"The factorial of {number} is: {result}")
`;
window["ans"+f] = `The factorial of 5 is: 120`;
window["noans1"+f] = `The factorial of 5 is: 100`;
window["noans2"+f] = `The factorial of 5 is: 110`;
window["noans3"+f] = `The factorial of 5 is: 140`;

f++;
window["type"+f] = "4";
window["des"+f] = ``;
window["q"+f] =`
def is_palindrome(s):
    s = s.lower().replace(" ", "").replace(",", "").replace(".", "")
    return s == s[::-1]

# Example usage
input_string = "A man, a plan, a canal, Panama"
if is_palindrome(input_string):
    print("The input string is a palindrome.")
else:
    print("The input string is not a palindrome.")
`;
window["ans"+f] = `The input string is a palindrome.`;
window["noans1"+f] = `The input string is not a palindrome.`;
window["noans2"+f] = `TypeError`;
window["noans3"+f] = `SyntaxError`;

f++;
window["type"+f] = "4";
window["des"+f] = ``;
window["q"+f] =`
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    
    while left <= right:
        mid = (left + right) // 2
        
        # Check if the target is present at the middle
        if arr[mid] == target:
            return mid
        
        # If the target is greater, ignore the left half
        elif arr[mid] < target:
            left = mid + 1
        
        # If the target is smaller, ignore the right half
        else:
            right = mid - 1
    
    # Target was not found in the list
    return -1

# Example usage
sorted_list = [2, 4, 7, 10, 14, 18, 23, 27]
target = 14
result = binary_search(sorted_list, target)

if result != -1:
    print(f"Element {target} is present at index {result}.")
else:
    print(f"Element {target} is not present in the list.")
`;
window["ans"+f] = `Element 14 is present at index 4.`;
window["noans1"+f] = `Element 10 is present at index 1.`;
window["noans2"+f] = `Element 14 is not present in the list.`;
window["noans3"+f] = `Element 10 is not present in the list.`;

f++;
window["type"+f] = "4";
window["des"+f] = ``;
window["q"+f] =`
numbers = [1, 2, 3, 4, 5]
squared_numbers = map(lambda x: x ** 2, numbers)
even_numbers = filter(lambda x: x % 2 == 0, squared_numbers)
result = sum(even_numbers)
print(result)
`;
window["ans"+f] = `20`;
window["noans1"+f] = `14`;
window["noans2"+f] = `30`;
window["noans3"+f] = `6`;

f++;
window["type"+f] = "4";
window["des"+f] = ``;
window["q"+f] =`
def recursive_factorial(n):
    if n == 0:
        return 1
    else:
        return n * recursive_factorial(n - 1)

def find_special_number(n):
    return sum(int(digit) for digit in str(recursive_factorial(n)))

result = find_special_number(5)
print(result)
`;
window["ans"+f] = `3`;
window["noans1"+f] = `120`;
window["noans2"+f] = `45`;
window["noans3"+f] = `100`;

weeTotal = f;