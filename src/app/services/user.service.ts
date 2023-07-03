import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})

export class UserService {

    isLoggedIn$: Observable<boolean>;
    isLoggedOut$: Observable<boolean>;
    pictureUrl$: Observable<string>;

    constructor(private afAuth: AngularFireAuth ) {
        //Just to show how it works
        // afAuth.idToken.subscribe(jwt => console.log("jwt", jwt));
        // afAuth.authState.subscribe(auth => console.log("auth", auth));

        this.isLoggedIn$ = afAuth.authState.pipe(map(user => !!user));
        this.isLoggedOut$ = this.isLoggedIn$.pipe(map(loggedIn => !loggedIn));
        this.pictureUrl$ = afAuth.authState.pipe(map(user => user? user.photoURL : null));
    }

    
    
}


