function pattern(n){
    for(i=0;i<n;i++){
        bag = " ";
        for(j=0;j<=i;j++){
            bag += "*";
        
        }
        console.log(bag)
    }
}
pattern(5);