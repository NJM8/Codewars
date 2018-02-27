//
//  deordorantEvaporator.c
//  deodorantEvaporator
//
//  Created by NATHAN J MALLISON on 2/26/18.
//  Copyright © 2018 NATHAN J MALLISON. All rights reserved.
//
//    We know the content of the evaporator (content in ml), the percentage of foam or gas lost every day (evap_per_day) and the threshold (threshold) in percentage beyond which the evaporator is no longer useful. All numbers are strictly positive.
//
//    The program reports the nth day (as an integer) on which the evaporator will be out of use.
//
//    Note : Content is in fact not necessary in the body of the function "evaporator", you can use it or not use it, as you wish. Some people might prefer to reason with content, some other with percentages only. It's up to you but you must keep it as a parameter because the tests have it as an argument.

#include "deordorantEvaporator.h"

int evaporator(double content, double evap_per_day, double threshold) {
    double contentCopy = content;
    double thresholdAmount = content * (threshold / 100);
    int count = 0;
    while (contentCopy > thresholdAmount) {
        contentCopy -= contentCopy * (evap_per_day / 100);
        count++;
    }
    return count;
}


