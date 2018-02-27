//
//  main.c
//  twoToOne
//
//  Created by NATHAN J MALLISON on 2/26/18.
//  Copyright © 2018 NATHAN J MALLISON. All rights reserved.
//

#include <stdio.h>
#include "twoToOne.h"

int main(int argc, const char * argv[]) {
    // insert code here...
    printf("Hello, World!\n");
    char* test1 = longest("aretheyhere", "yestheyarehere");
    char* test2 = longest("loopingisfunbutdangerous", "lessdangerousthancoding");
    char* test3 = longest("inmanylanguages", "theresapairoffunctions");
    char* test4 = longest("lordsofthefallen", "gamekult");
    char* test5 = longest("codewars", "codewars");
    
    printf("Expected aehrsty, and got %s\n" ,test1);
    printf("Expected abcdefghilnoprstu, and got %s\n" ,test2);
    printf("Expected acefghilmnoprstuy, and got %s\n" ,test3);
    printf("Expected adefghklmnorstu, and got %s\n" ,test4);
    printf("Expected acdeorsw, and got %s\n" ,test5);
    return 0;
}
