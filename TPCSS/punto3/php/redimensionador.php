<?php
/*
);select * from ;
 */
class Redimensionador{

  private $rutaImagen;
  private $miAncho;
  private $miAlto;
  private $descripcionImagen;

  function __construct($rutaImagen){
      $this->rutaImagen = $rutaImagen;
  }

  public function setAncho($nuevoAncho){
    $this->miAncho = $nuevoAncho;
  }

  public function setAlto($nuevoAlto){
    $this->miAlto = $nuevoAlto;
  }

  public function generarMiniatura($rutaOriginal, $rutaDestino, $fileName){
    $resultado =$this->miniatura($rutaOriginal, $rutaDestino, $fileName);
    return $resultado;
  }

  private function miniatura($rutaOriginal, $rutaDestino, $fileName){
    if (($this->miAncho == 0) || ($this->miAlto == 0)){
      return "Error, el ancho o el alto es cero";
    } else {
      $fuenteImagen = imagecreatefromjpeg($rutaOriginal);
      $width = imagesx($fuenteImagen);
      $height = imagesy($fuenteImagen);

      $imagenVirtual = imagecreatetruecolor($this->miAncho, $this->miAlto);

      imagecopyresampled($imagenVirtual, $fuenteImagen, 0, 0, 0, 0, $this->miAncho, $this->miAlto, $width, $height);
      
      $rutaDestino = $rutaDestino . $fileName;
       
      imagejpeg($imagenVirtual, $rutaDestino);
      return "La miniatura se ha creado :)";

    }
  }
}

 ?>
