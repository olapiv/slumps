#include <stdio.h>

int i;
double sum(int *i, int lo, int hi, double (*term)()) {
    double temp = 0;
    for (*i = lo; *i <= hi; (*i)++)
        temp += term();
    return temp;
}

double term_func() { return 1.0 / i; }

int main () {
    printf("%f\n", sum(&i, 1, 100, term_func));
    return 0;
}