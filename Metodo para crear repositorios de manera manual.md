# Metodo para crear el respaldo de los equipos de manera manual

El siguiente documento describe el metodo para crear el respaldo del runtime de los equipos de Cybonder de manera manual dentro de las instalaciones de la empresa y sin recurrir a ningun servidor externo.

## Prerequisitos

* Una computadora con windows, conectada a la red en la que se encuentra los equipos y el equipo de respaldo.
    - la computadora debe de tener instalado Git

## Pasos para inicializar el respaldo

Abrir una ventana de comandos (presiona `CTRL + R` escribe `CMD` y presiona `ENTER`), cuando tengas la ventana de comandos activa, tienes que ver algo como esto:

```
c:\>
```

escribe el comando, cambiando el nombre de la maquina a la que le quieres hacer el respaldo :

```
net use T: \\cybond38\c$ bonder_02 /USER:AVAGOTECH\operator
```

al terminar el comando veran algo como esto:

```
C:\>net use T: \\cybond38\c$ bonder_02 /USER:AVAGOTECH\operator
The command completed successfully.

C:\>
```

ahora tienes que cambiar al _drive_ que acabas de crear:

```
C:\> T:
```

y hacer un nuevo archivo con el siguiente comando:

```
T:\> notepad .gitignore
```

Te va a decir que el archivo no existe y que si lo quieres crear, __le dices que si__.A este le tienes que poner el contenido siguiente:

```
# ignore everithing ...
/*

# except
!/CAT
/CAT/*
!/CAT/Runtime
```

Con este archivo le estamos diciendo que solamente tiene que poner atencion a el directorio `CAT/Runtime` y todo su contenido. 

### Apartir de aqui ya empezamos a trabajar con GIT

Ejecutas el comando:

```
T:\> git init
```

te tiene que responder: `Initialized empty Git repository in t:/.git/`, lo siguiente que tienes que hacer es agregar todo lo que quieres respaldar:

```
T:\> git add .
```

Luego de ver muchar letras pasar tienes que poner el siquiete comando:

```
T:\> git commit -m "Initial commit"
```

De nuevo veras muchas letras pasar y al terminar puedes revisar lo que hiciste con:

```
T:\> git log --graph --oneline --decorate
* f5dd242 (HEAD, master) Initial commit
```

Hasta aqui ya tienes el repositorio creado y ya le tomaste la foto a lo que tienes actualmente en la maquina, ahora lo que hay que hacer es montar esta foto en el compartido, y enlazarlo a su fuente, por que lo que acabamos de hacer no va a saber que existe la foto.

## Montaje del repositorio en el compartido

* Abres una ventana del explorador de carpetas
* Vas a la direccion `\\wmatvmlr401\git`
* Presionas `shift` y haces click derecho sobre la ventana en una area libre
* Seleccionas `Open command window here`

Veras que crea de manera automatica un _virtual drive_ generalmente empieza con `Z:\>`. Ahora clonas el repositorio que acabas de crear y le pones el nombre de la maquina a la que pertenece

```
Z:\>git clone --bare t:\.git cybond38.git
```

Ya que tienes la foto en el compartido, tienes que enlazar el __local__ con el __compartido__, ~~tienes que utilizar el nombre de la maquina a la que pertenece el compartido~~

```
t:\>git remote add origin file:////wmatvmlr401/git/cybond38.git
```

Marcamos como predeterminada `origin` (la conexion que acabamos de hacer), con `master` (la foto que tenemos de la maquina)

```
t:\>git push -u origin master
Branch master set up to track remote branch master from origin.
Everything up-to-date
```

Con esto hemos configurado la maquina y el repositorio para que se sincronizen, asi que desde ahora los cambios que hagamos localmente, los podremos enviar directamente al compartido utilizando el comando `push`. y toda la informacion estara disponible para revision o para recuparar en caso de corrupcion y desconfiguracion de los equipo.

para volver a comenzar con otra maquina puedes cambiarte al _drive_ `C:` y desconectar el drive

```
T:\>c:
C:\>net use /del t: /y
t: was deleted successfully
```



~~CYBOND38~~
~~CYBOND55~~
~~CYBOND57~~
~~CYBOND59~~
~~CYBOND63~~
~~CYBOND14~~
~~CYBOND3~~
~~CYBOND56~~
~~CYBOND58~~
~~CYBOND60~~
~~CYBOND76~~
~~CYBOND54~~