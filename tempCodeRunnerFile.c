#include<stdio.h>
#include<conio.h>
void main(){
    int i = 0, a[5], b[5], c[5], d[5], e[5], ab[5];
    int ac[5], ad[5], ao[5], ba[5], bc[5], be[5];
    int bo[5], ca[5], cb[5], ce[5], co[5], da[5];
    int ec[5], eb[5], eo[5], dop[5];
    char node[5]={'A', 'B', 'C', 'D', 'E'};
    printf(" *** DISTANCE VECTOR ROUTING *** \n\n\n");
    printf("\n Enter values for 'a':\n");
    for(i = 0; i < 5; i++)
        scanf("%d", &a[i]);
    printf("\n Enter the values for 'b':\n ");
    for(i = 0; i < 5; i++)
        scanf("%d", &b[i]);
    printf("\n Enter the values for 'c':\n ");
    for(i = 0; i < 5; i++)
        scanf("%d", &c[i]);
    printf("\n Enter the values for 'd':\n ");
    for(i = 0; i < 5; i++)
        scanf("%d", &d[i]);
    printf("\n Enter the values for 'f':\n ");
    for(i = 0; i < 5; i++)scanf("%d", &e[i]);
    printf("\n\n THE ROUTERS TABLE WITH OPTIMUM VALUES:\n");
    printf(" \t ------------------------------------\n");
    printf("\t A \t B \t C \t D\t E\n");
    printf(" \t ------------------------------------\n");
    printf("%c\t", node[0]);
    for(i = 0; i < 5; i++){
        ab[i] = a[1] + b[i];
        ac[i] = a[2] + c[i];
        ad[i] = a[3] + d[i];
    }
    for(i = 0; i< 5; i++){
        if(a[i] < ab[i] && a[i] < ac[i] &&a[i] < ad[i])
            ao[i] = a[i];
        else if(ab[i] < ac[i] && ab[i] < ad[i])
            ao[i] = ab[i];
        else if(ac[i] < ad[i])
            ao[i] = ac[i];
        else ao[i] = ad[i];
        printf("%d\t", ao[i]);
    }
    printf("\n %c \t ", node[1]);
    for(i = 0; i < 5; i++){
        ba[i] = b[0] + ao[i];
        bc[i] = b[2] + c[i];
        be[i] = b[4] + e[i];
    }
    for(i = 0; i < 5; i++){
        if (b[i] < ba[i] && b[i] < bc[i] && b[i] < be[i])
            bo[i] = b[i];
        else if(ba[i] < bc[i] && ba[i] < be[i])
            bo[i] = ba[i];
        else if(bc[i] < be[i])
            bo[i] = bc[i];
        else bo[i] = be[i];
        printf("%d\t", bo[i]);
    }
    printf("\n%c\t", node[2]);
    for(i = 0; i < 5; i++){
        ca[i] = c[0] + ao[i];
        cb[i] = c[1] + bo[i];
        ce[i] = c[4] + e[i];
    }
    for(i = 0; i < 5; i++){
        if(c[i] < ca[i] && c[i] < cb[i] && c[i] < ce[i])
            co[i] = c[i];
        else if(ca[i] < cb[i] && ca[i] < ce[i])
            co[i] = ca[i];
        else if(cb[i] < ce[i])
            co[i] = cb[i];
        else co[i] = ce[i];
        printf("%d\t", co[i]);
    }
    printf("\n %c \t", node[3]);
    for(i = 0; i < 5; i++)
        da[i] = d[0] + ao[i];
    for(i = 0; i < 5; i++){
        if(d[i] < da[i])
            dop[i] = d[i];
        else dop[i] = da[i];
        printf("%d\t", dop[i]);
    }
    printf("\n%c\t",node[4]);
    for(i = 0; i < 5; i++){
        ec[i] = e[2] + co[i];
        eb[i] = e[1] + bo[i];
    }
    for(i = 0; i < 5; i++){
        if(e[i] < ec[i] && e[i] < eb[i])
            eo[i] = e[i];
        else if(ec[i] < eb[i])
            eo[i] = ec[i];
        else eo[i] = eb[i];
        printf("%d\t", eo[i]);
    }
    printf("\n\t---------------------------\n");
    printf("\n OPTIMUM COST FROM ROUTER-A TO ROUTER-E:");
    printf("%d", ao[4]);getch();
}