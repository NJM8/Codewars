//
//  main.c
//  stringRepeat
//
//  Created by NATHAN J MALLISON on 2/26/18.
//  Copyright © 2018 NATHAN J MALLISON. All rights reserved.

//  Write a function called repeatStr which repeats the given string string exactly n times.

//  repeatStr(6, "I") // "IIIIII"
//  repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"


#include <stdio.h>
#include "stringRepeat.h"


int main(int argc, const char * argv[]) {
    // insert code here...
    printf("Hello, World!\n");
    size_t count2 = 34;
    const char *str2 = "*a%%Dv6&8(c&lJpV8HCgCicWjdHJ#$8!";
    printf("My new string is: %s\n", repeat_str(count2, str2));
    return 0;
}

