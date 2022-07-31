import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from 'react-i18next';
import '../App.css';
var jsonData = require('./Patterns.json');

export default function Register() {
  const { register, formState: { errors }, handleSubmit } = useForm();
     const onSubmit = data => {console.log(data); alert(t('SUBMITTED'));};
    const { t } = useTranslation();
        return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header"><center><strong>{t('REGISTRATION_FORM')}</strong></center></div>
                <div className="card-body">
                <form className="" onSubmit={handleSubmit(onSubmit)} action="#"> 
                <div className="form-group">
                    <label>{t('FIRST_NAME')}</label>
                    <input  type="text" className="form-control"  {...register("firstName", { required:true, maxLength: 20 , pattern: new RegExp(jsonData.namepattern)})} />
                     {errors.firstName && errors.firstName.type==='required' && <p className="error">{t('REQUIRED')}</p>}
                     {errors.firstName && errors.firstName.type==='pattern' && <p className="error">{t('CHARACTER_ONLY')}</p>}
                

                </div>
                <div className="form-group">
                    <label>{t('LAST_NAME')}</label>
                    <input  type="text" className="form-control"  {...register("lastName", { required:true , pattern: new RegExp(jsonData.lastnamepattern) })} />
                     {errors.lastName && errors.lastName.type==='required' && <p className="error">{t('REQUIRED')}</p>}
                     {errors.lastName && errors.lastName.type==='pattern' && <p className="error">{t('ENTER_CHARACTER_ONLY_MIN_LENGTH_5')}</p>}
                </div>
             
               <div className="form-group">
                    <label>{t('EMAIL_ADDRESS')}</label>
                    <input  type="email" className="form-control"  {...register("email", { required:true , pattern: new RegExp(jsonData.emailpattern)  })} />
                     {errors.email && errors.email.type==='required' && <p className="error">{t('REQUIRED')}</p>}
                     {errors.email && errors.email.type==='pattern' && <p className="error">{t('INVALID_EMAIL')}</p>}
                </div>
               

                 <div className="form-group">
                    <label>{t('AGE')}</label>
                    <input  type="text" className="form-control" {...register("age", { required:true , pattern:new RegExp(jsonData.agepattern) })} />
                      {errors.age && errors.age.type==='required' && <p className="error">{t('REQUIRED')}</p>}
                     {errors.age && errors.age.type==='pattern' && <p className="error">{t('NUMBERS_ONLY')}</p>}
                </div>
                <div className="form-group">
                    <label>{t('CONTACT')}</label>
                    <input  type="text" className="form-control"  {...register("contact", { required:true, pattern:new RegExp(jsonData.contactpattern) })} />
                     {errors.contact && errors.contact.type==='required' && <p className="error">{t('REQUIRED')}</p>}
                     {errors.contact && errors.contact.type==='pattern' && <p className="error">{t('ENTER_NUMBER_ONLY_LENGTH_10')}</p>}
                </div>

                 <div className="form-group">
                    <label>{t('PASSWORD')}</label>
                    <input  type="password" className="form-control"  {...register("password", { required:true , pattern:new RegExp(jsonData.passwordpattern) })} />
                     {errors.password && errors.password.type==='required' && <p className="error">{t('REQUIRED')}</p>}
                     {errors.password && errors.password.type==='pattern' && <p className="error">{t('INVALID_PASSWORD')}</p>}
                </div>
                 <div className="form-group">
                    <label>{t('DATE_OF_BIRTH')}</label>

                     <input type="date" className="form-control"  {...register("dob", { required:true})} />
                       {errors.dob && errors.dob.type==='required' && <p className="error">{t('REQUIRED')}</p>}
                </div>
                <div className="form-group">
                <center><input type="submit" className="btn btn-primary btn-lg btn-block login-button" value={t('REGISTER')}/>
                <p className="forgot-password text-right">
                {t('ALREADY_REGISTER')}  <a href="next.js">{t('SIGN_IN')}?</a>
                </p></center>
                </div>
             </form>
            </div>
           </div>
          </div>
        </div>
       </div>   

        );
  }