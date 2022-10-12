#include <bits/stdc++.h>
using namespace std;
 
bool checkYear(int year)
{
    if (year % 400 == 0)
        return true;
 
    if (year % 100 == 0)
        return false;
 
    if (year % 4 == 0)
        return true;
    return false;
}
 
int main()
{
    int year = 2013;
 
    checkYear(year) ? cout << "Leap Year":
                      cout << "Not a Leap Year";
    return 0;
}
