//
//  arithmaticFunction.c
//  arithmaticFunction
//
//  Created by NATHAN J MALLISON on 2/28/18.
//  Copyright © 2018 NATHAN J MALLISON. All rights reserved.
//
//    Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.
//
//    a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.
//
//    The four operators are "add", "subtract", "divide", "multiply".
//
//    A few examples:
//
//    arithmetic(5, 2, "add")      => returns 7
//    arithmetic(5, 2, "subtract") => returns 3
//    arithmetic(5, 2, "multiply") => returns 10
//    arithmetic(5, 2, "divide")   => returns 2.5
//
//    Try to do it without using if statements!
//
// ascii codes for first letter of operator
// a = 65
// s = 83
// m = 77
// d = 68


#include "arithmaticFunction.h"

double arithmetic(double a, double b, char * operator) {
    double result = 0;
    int operatorNum = operator[0] - 32;
    
    switch(operatorNum) {
        case 65:
            result = a + b;
            break;
        case 83:
            result = a - b;
            break;
        case 77:
            result = a * b;
            break;
        case 68:
            result = a / b;
            break;
    }
    
    return result;
}







