//
//  main.c
//  growthOfPopulation
//
//  Created by NATHAN J MALLISON on 2/23/18.
//  Copyright © 2018 NATHAN J MALLISON. All rights reserved.
//

#include <stdio.h>
#include "growthOfPopulation.h"

int main(int argc, const char * argv[]) {
    // insert code here...
    printf("Hello, World!\n");
    printf("The answer is %d.\n", nbYear(1500, 5, 100, 5000));
    printf("The answer should be %d.\n", 15);
    printf("The answer is %d.\n", nbYear(1500000, 2.5, 10000, 2000000));
    printf("The answer should be %d.\n", 10);
    return 0;
}
