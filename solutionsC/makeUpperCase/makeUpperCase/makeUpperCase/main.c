//
//  main.c
//  makeUpperCase
//
//  Created by NATHAN J MALLISON on 2/28/18.
//  Copyright © 2018 NATHAN J MALLISON. All rights reserved.
//

#include <stdio.h>
#include "makeUpperCase.h"

int main(int argc, const char * argv[]) {
    // insert code here...
    printf("Hello, World!\n");
    char *myString = "Hello World!!";
    char *buff = malloc(strlen(myString) +1);
    strcpy(buff, myString);
    //myString[1] = 56;
    printf("my starting string: %s\n", myString);
    makeUpperCase(myString);
    printf("my new string: %s\n", myString);
    return 0;
}
