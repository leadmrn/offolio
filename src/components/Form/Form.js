import React, {useState} from "react";
import {useForm} from "react-hook-form";
import { Redirect } from "react-router-dom";

function FormSignUp(){

  const {register, handleSubmit} = useForm();
  const [error, setError] = useState();
  const [signUp, setSignUp] = useState(false);

  const onSubmit = (data)=>{
    data.password === data.checkPassword ?
      isSignUp(data)
    :
      setError('Les mots de passe sont différents, veuillez réessayer.')
  }

  const isSignUp = (data)=>{
    const user = data.email.split("@")[0];
    localStorage.setItem('user', user);
    document.querySelector('.FormSignIn').classList.add('disappear');
    setTimeout(()=>{
      setSignUp(true);
    }, 1500);
  }

  return(
    <div className="FormSignIn">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">Identifiant (email)</label>
          <input className="form-control" type="email" id="email" required {...register('email')} />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="password">Mot de passe</label>
          <input className="form-control" type="password" id="password" required {...register('password')} />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="checkPassword">Confirmer le mot de passe</label>
          <input className="form-control" type="password" id="checkPassword" required {...register('checkPassword')} />
        </div>
        <div className="mb-3 form-check">
          <input className="form-check-input" type="checkbox" id="checkbox" required {...register('checkbox')} />
          <label className="form-check-label" htmlFor="checkbox">Je valide les termes contractuels</label>
        </div>
        <button className="btn btn-primary" type="submit">S'inscrire</button>
      </form>
      {error ? <div className="mt-3 alert alert-danger">{error}</div> : ""}
      {signUp === true ? <Redirect to={{pathname: "/dashboard"}} /> : null}
    </div>
  )
}

export default FormSignUp;