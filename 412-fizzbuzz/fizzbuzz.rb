# @param {Integer} n
# @return {String[]}
def fizz_buzz(n)
    return (1..n).map{|i| 
        next 'FizzBuzz' if 0 == i%15
        next 'Buzz' if (i%5).zero?
        next 'Fizz' if (i%3).zero?
        i.to_s
    }
end
