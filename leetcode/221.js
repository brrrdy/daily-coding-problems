/**
 * Author: Cody Zornes
 * Date: 2022/02/20
 * 
 * Leetcode #221 Maximal Square https://leetcode.com/problems/maximal-square/
 * Desc: Given an m x n binary matrix (1s and 0s), find the largest square 
 * containing only 1s, return its area
 * 
 * Ex input 1: 
 * 1 0 1 0 0
 * 1 0 1 1 1
 * 1 1 1 1 1
 * 1 0 0 1 0
 * ARRAY: [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
 * 
 * Ex output 1: 4
 * 
 * 
 * Ex cache arr for input 1: 
 * 1 0 1 0 0
 * 1 0 2 2 1
 * 1 1 1 1 1
 * 1 0 0 1 0
 * 
 * 
 * 
 * 
 */


// check each el in subarrays, if el == 1, we have 1 area sq
//  for each 1, check down, right and diag, 