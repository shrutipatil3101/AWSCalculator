
var express = require('express');
var app = express();
exports.add = function(first_num,second_num)
{
    return first_num + second_num;
}
exports.subtract = function(first_num,second_num)
{
    return first_num - second_num;
}

exports.multiply = function(first_num,second_num)
{
    return first_num * second_num;
}

exports.divide = function(first_num,second_num)
{   if (second_num == 0)
    {
        return "cannot divide by 0";

    }
    else
    {
    return first_num / second_num;
    }
}