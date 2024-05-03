import { Button, Box, CircularProgress, Typography, TextField, Select, MenuItem } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'


const schema = z.object({
    nome: z.string().min(3, "Minimo de 3 caracteres").transform(value => value + " TESTE"),
})

export function Form() {

    const { register, handleSubmit, watch, formState: { errors, isSubmitting }, control } = useForm({
        defaultValues: {
            sexo: 'M',
            permissao: false,
            nome: "",
            sobrenome: ''
        },
        resolver: zodResolver(schema)
    })
    // formState.defaultValues
    // formState.errors
    async function onSubmit(values) {
        // ...
        // componente controlado com useState
        // useRef com referencias de elemntos
        console.log(values)
        await new Promise(resolve => setTimeout(resolve, 2000))
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>{watch("nome")}</h2>
                <Box display="flex" flexDirection="column" gap={2} maxWidth={500}>
                    <TextField 
                        variant="outlined"
                        type="text" 
                        placeholder="Nome"
                    {...register("nome")} />
                    {errors.nome && <Typography fontSize={12} color="red">{errors.nome.message}</Typography>}

                    <Controller 
                        name='age'
                        control={control}
                        render={({ field }) => (
                            <Select value={field.value} onChange={field.onChange} onBlur={field.onBlur}>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        )}
                    />
                    {/* <input 
                        type="text" 
                        placeholder="Nome"
                        {...register("nome", { 
                            required: "Este campo é obrigatório", 
                            minLength: {
                                value: 3,
                                message: "Informe no minimo 3 caracteres"
                                },
                                // validate: {
                                //     value: (value) => {
                                //         if(value !== "vitor") return false
                                //         return true
                                //     },
                                //     message: "Nome não é vitor"
                                // }
                            })}
                    /> */}
                    {/* {errors.nome && <Typography fontSize={12} color="red">{errors.nome.message}</Typography>} */}
                    
                    <input type="text" placeholder="Sobrenome"  {...register("sobrenome")} />
                    <input type="text" placeholder="Senha"  {...register("senha")} />
                    
                    <input type="date" {...register("date")}  />

                    <input type="text" placeholder="Telefone"  {...register("telefone", {
                        pattern: {
                            value: /^\(\d{2}\) 9\d{4}-\d{4}$/,
                            message: "Informe um padrão correto"
                        }
                    })} />
                    
                    {errors.telefone && <Typography fontSize={12} color="red">{errors.telefone.message}</Typography>}

                    <select {...register("sexo")}>
                        <option disabled>Selecione sua opção</option>
                        <option value="M">Masculino</option>
                        <option value="F">Feminino</option>
                    </select>

                    <input type="number" {...register('idade', { required: true, min: 18 })} />
                    {errors.idade && <Typography fontSize={12} color="red">Deve ser maior de 18 anos</Typography>}

                    <label htmlFor='permissao'>Permitir compartilhar dados?</label>
                    <input type='checkbox' id="permissao" {...register("permissao")} />
                    {/* <input type="submit" value="Cadastrar" /> */}
                    {/* <Button type='submit'>Cadastrar</Button> */}
                    <Button type='submit' disabled={isSubmitting}>
                        {isSubmitting ? <CircularProgress /> : 'Cadastrar'}
                    </Button>
                    {/* <button type='submit'>Cadastrar</button> */}
                </Box>
            </form>
        </div>
    )
}