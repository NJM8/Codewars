//
//  main.c
//  deodorantEvaporator
//
//  Created by NATHAN J MALLISON on 2/26/18.
//  Copyright © 2018 NATHAN J MALLISON. All rights reserved.
//

#include <stdio.h>
#include "deordorantEvaporator.h"

int main(int argc, const char * argv[]) {
    // insert code here...
    printf("Hello, World!\n");
    int test1 = evaporator(10, 10, 10);
    int test2 = evaporator(10, 10, 5);
    int test3 = evaporator(100, 5, 5);
    int test4 = evaporator(50, 12, 1);
    
    printf("Expected %d, got %d\n", 22, test1);
    printf("Expected %d, got %d\n", 29, test2);
    printf("Expected %d, got %d\n", 59, test3);
    printf("Expected %d, got %d\n", 37, test4);

    return 0;
}
