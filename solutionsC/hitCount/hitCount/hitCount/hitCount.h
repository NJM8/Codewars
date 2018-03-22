//
//  hitCount.h
//  hitCount
//
//  Created by NATHAN J MALLISON on 2/27/18.
//  Copyright © 2018 NATHAN J MALLISON. All rights reserved.
//

#ifndef hitCount_h
#define hitCount_h

#include <stdio.h>
#include <stdlib.h>
#include <stddef.h>

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
struct Node {
    int value;
    struct Node *next;
};
struct Node ** counter_effect(const char *hit_count, size_t *p_result_count);
void add_node(struct Node ** head, int val);

#endif /* hitCount_h */
