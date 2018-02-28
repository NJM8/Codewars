//
//  main.c
//  pileOfCubes
//
//  Created by NATHAN J MALLISON on 2/28/18.
//  Copyright © 2018 NATHAN J MALLISON. All rights reserved.
//

#include <stdio.h>
#include "pileOfCubes.h"

int main(int argc, const char * argv[]) {
    // insert code here...
    printf("Hello, World!\n");
    
    long long test1 = findNb(24723578342962);
    printf("Expected %d, got %lld\n", -1, test1);
    
    long long test2 = findNb(135440716410000);
    printf("Expected %d, got %lld\n", 4824, test2);
    
    long long test3 = findNb(26825883955641);
    printf("Expected %d, got %lld\n", 3218, test3);
    
    long long test4 = findNb(441);
    printf("Expected %d, got %lld\n", 6, test4);
    
    return 0;
}
