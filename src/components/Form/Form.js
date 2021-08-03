import React, {useState} from "react";
import {useForm} from "react-hook-form";
import { Redirect } from "react-router-dom";

function FormSignUp(){

  const {register, handleSubmit} = useForm();
  const [error, setError] = useState();
  const [signUp, setSignUp] = useState(false);

  const onSubmit = (data)=>{
    data.password === data.checkPassword && data.checkbox === true  ?
      setSignUp(true)
    : data.password !== data.checkPassword ? setError('Les mots de passe sont différents') : setError('Veuillez valider les termes contractuels');
  }

  return(
    <div className="FormSignIn">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">Identifiant</label>
          <input className="form-control" type="email" placeholder="Email" id="email" {...register('email')} />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="password">Mot de passe</label>
          <input className="form-control" type="password" placeholder="Mot de passe" id="password" {...register('password')} />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="checkPassword">Confirmer le mot de passe</label>
          <input className="form-control" type="password" placeholder="Confirmer le mot de passe" id="checkPassword" {...register('checkPassword')} />
        </div>
        <div className="mb-3 form-check">
          <input className="form-check-input" type="checkbox" id="checkbox" {...register('checkbox')} />
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