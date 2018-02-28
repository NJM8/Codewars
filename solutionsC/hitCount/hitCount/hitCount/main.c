//
//  main.c
//  hitCount
//
//  Created by NATHAN J MALLISON on 2/27/18.
//  Copyright © 2018 NATHAN J MALLISON. All rights reserved.
//

#include <stdio.h>
#include "hitCount.h"

int main(int argc, const char * argv[]) {
    // insert code here...
    printf("Hello, World!\n");
    size_t res = 4;
    struct Node * myNode;
    myNode = counter_effect("0123", &res);
    
    return 0;
}
