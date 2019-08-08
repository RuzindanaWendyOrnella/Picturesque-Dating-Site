
      <?php
         if(isset($_POST["submit"])){
            include_once('database.php');
            $sql = "INSERT INTO chart(messages)VALUES ('".$_POST["name"]."')";

            if (mysqli_query($conn, $sql)) {
                header('Location: ../index.php');
            } else {
               echo "Error: " . $sql . "" . mysqli_error($conn);
            }
            $conn->close();
         }
      ?>
   </body>
</html>