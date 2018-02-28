//
//  main.c
//  arithmaticFunction
//
//  Created by NATHAN J MALLISON on 2/28/18.
//  Copyright © 2018 NATHAN J MALLISON. All rights reserved.
//

#include <stdio.h>
#include "arithmaticFunction.h"

int main(int argc, const char * argv[]) {
    // insert code here...
    printf("Hello, World!\n");
    
    double test1 = arithmetic(1, 2, "add");
    printf("Expected %d, got %f\n", 3, test1);
    
    double test2 = arithmetic(8, 2, "subtract");
    printf("Expected %d, got %f\n", 6, test2);
    
    double test3 = arithmetic(5, 2, "multiply");
    printf("Expected %d, got %f\n", 10, test3);
    
    double test4 = arithmetic(8, 2, "divide");
    printf("Expected %d, got %f\n", 4, test4);
    return 0;
}
