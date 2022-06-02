
{
let message = [...'ok'];
let messageIterator = message[Symbol.iterator]();

//messageIterator.next();

for ( let item of messageIterator ) {
  //  console.log( item );
}
}

{
    let getCountdownIterator = function *() {
        let num = 10;
        while(num >1){
            yield --num;
        }
        // Your code comes here
    }



    //console.log( [ ...getCountdownIterator() ] );
    //> [9, 8, 7, 6, 5, 4, 3, 2, 1]  
}

// Make the following object iterable:
{
    let todoList = {
        todoItems: [],
        *[Symbol.iterator]() {
            yield* this.todoItems
        },
        addItem( description ) {
            this.todoItems.push( { description, done: false } );
            return this;
        },
        crossOutItem( index ) {
            if ( index < this.todoItems.length ) {
                this.todoItems[index].done = true;
            }
            return this;
        }
    };
    
    todoList.addItem( 'task 1' ).addItem( 'task 2' ).crossOutItem( 0 );
    
    // adding a generator
    let todoListGenerator = function *() {
        yield* todoList.todoItems;
    }
    // Write your code below
    

    let iterableTodoList = todoListGenerator()
    
    for ( let item of iterableTodoList ) {
       // console.log( item );
    }
    

}
{
    let errorDemo = function *() {
        yield 1;
        yield 'Error yielding the next result';
        yield 2;
    }
    
    let it = errorDemo();
    
    // Execute one statement at a time to avoid
    // skipping lines after the first thrown error.
    console.log(it)
    console.log( it.next() );
    
    // console.log( it.next() );
    
    // console.log( [...errorDemo()] );
    
    // for ( let element of errorDemo() ) {
    //     console.log( element );
    // }
}

{
    
}

