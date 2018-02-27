//
//  convertBoolean.c
//  convertBoolean
//
//  Created by NATHAN J MALLISON on 2/26/18.
//  Copyright © 2018 NATHAN J MALLISON. All rights reserved.
//

//    Complete the bool_to_word (PHP: boolToWord ) method.
//
//    Given: a boolean value
//
//    Return: a 'Yes' string for true and a 'No' string for false


#include "convertBoolean.h"

const char *bool_to_word (int value) {
    if (value) {
        return "Yes";
    } else {
        return "No";
    }
};
