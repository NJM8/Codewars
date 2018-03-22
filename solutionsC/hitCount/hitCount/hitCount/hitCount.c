//
//  hitCount.c
//  hitCount
//
//  Created by NATHAN J MALLISON on 2/27/18.
//  Copyright © 2018 NATHAN J MALLISON. All rights reserved.
//
//    Introduction
//
//    You are the developer working on a website which features a large counter on its homepage, proudly displaying the number of happy customers who have downloaded your companies software.
//
//    You have been tasked with adding an effect to this counter to make it more interesting.
//
//    Instead of just displaying the count value immediatley when the page loads, we want to create the effect of each digit cycling through its preceding numbers before stopping on the actual value.
//
//    Task
//
//    As a step towards achieving this; you have decided to create a function that will produce a multi-dimensional array out of the hit count value. Each inner dimension of the array represents an individual digit in the hit count, and will include all numbers that come before it, going back to 0.
//    Rules
//
//    The function will take one argument which will be a four character string representing hit count
//    The function must return a multi-dimensional array containing four inner arrays
//    The final value in each inner array must be the actual value to be displayed
//    Values returned in the array must be of the type number
//
//    Examples
//
//    counterEffect("1250") // [[0,1],[0,1,2],[0,1,2,3,4,5],[0]]
//    counterEffect("0050") // [[0],[0],[0,1,2,3,4,5],[0]]
//    counterEffect("0000") // [[0],[0],[0],[0]]

// For the C version of the kata, given certain limitations
// of the language you will have to use an array of linked lists
// as opposed to the multi-dimensional array in the original kata
// spec.

// For example, given the call of the format:
// counter_effect("1250")
//
// The resulting array looks as follows (top to bottom view):
// nodes[0] = 0 -> 1
// nodes[1] = 0 -> 1 -> 2
// nodes[2] = 0 -> 1 -> 2 -> 3 -> 4 -> 5
// nodes[3] = 0
//
// For an example see the sample test code.

#include "hitCount.h"
#include <string.h>

struct Node ** counter_effect(const char * hit_count, size_t * p_result_count) {
    struct Node ** numbers = malloc(4 * sizeof(struct Node*));
    memset(numbers, 0, 4 * sizeof(struct Node*));
    for (int i = 0; i < 4; i++) {
        struct Node * new_node;
        new_node = malloc(sizeof(struct Node));
        new_node->next = NULL;
        int count = hit_count[i] - 48;
        new_node->value = count;
        if (count == 0) {
            numbers[i] = new_node;
            continue;
        }
        for (int j = count - 1; j >= 0; j--) {
            add_node(&new_node, j);
        }
        numbers[i] = new_node;
    }
    
    return numbers;
}

void add_node(struct Node ** head, int val) {
    struct Node * new_node;
    new_node = malloc(sizeof(struct Node));
    new_node->value = val;
    new_node->next = *head;
    *head = new_node;
}













