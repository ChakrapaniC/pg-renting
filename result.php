<?php
session_start();
$rows = json_decode($_SESSION['rows'], true);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="result.css"/>
</head>
<body>
    <div class="city-container">
        <nav class="navbar">
            <p1 style="font-size: 35px; letter-spacing: 5px; font-weight: bold">Housify</p1>
            <div class="info">
                <p1><a href="../about/about.html">About Us</a></p1>
                <p1><a href="#contact-row">Contact Us</a></p1>
            </div>
            <div class="btn" onclick="toggleModal()">
                <button class="btn3">Request Call</button>
            </div>
        </nav>
        <nav class="mobile-nav" style="display:none">
            <div class="top">
                <p1 style="font-size: 35px; letter-spacing: 5px; font-weight: bold">Housify</p1>
                <div class="info">
                    <p1><a href="../about/about.html">About Us</a></p1>
                    <p1>Contact Us</p1>
                </div>
            </div>
            <div class="bottom">
                <div class="btn" onclick="toggleModal()">
                    <button class="btn3">Request Call</button>
                </div>
            </div>
        </nav>
        <?php if (!empty($rows)): ?>
        <h4 style="margin: 20px ; font-size:25px ";>Properties in <?php echo $rows[0]['cityName']; ?></h4>
        <div class="coliving-spaces">
           
            
                <?php foreach ($rows as $row): ?>
                    <div class="card" onclick="showDetails(<?php echo $row['id']; ?>)">
                        <img src="<?php echo $row['imgSrc']; ?>" alt="img-<?php echo $row['imgSrc']; ?>" />
                        <div class="details">
                            <h4><?php echo $row['name']; ?></h4>
                            <p><?php echo $row['location']; ?></p>
                            <h4>₹15,000 / month</h4>
                            <p>Call Owner</p>
                        </div>
                    </div>
                <?php endforeach; ?>
            <?php else: ?>
                <p>No results found</p>
            <?php endif; ?>
        </div>
    </div>

    <section class="upper-footer">
      <div class="footer-content">
        <div class="rows">
          <div class="content-row">
            <div>
              <div class="Housify" style="margin-bottom: 10px;"><h4>HOUSIFY</h4></div>
              <div  class="text">
                <p> Housify is a top leading platform to provide couple-friendly space in pan India. Our team physically verified all the listed spaces, these are perfect and offer you a premium, prestigious, and trouble-free lifestyle. Housify is an ideal platform that provides independence, liberty, as well as freedom to couples. You just need to follow three easy steps to onboard on your desired couple-friendly living accommodation with Housify.</p>
              </div>
            </div>
          </div>
          <div class="pg-row">
            <div>
              <div class="pg"><h4>PG</h4></div>
              <hr/>
              <div class="ull">
                <li><a href="../bangalore/city.html">PG in Bangalore</a></li>
                <li><a href="../delhi/delhi.html">PG in Delhi</a></li>
                <li><a href="../gurugram/gurugram.html">PG in Gurugram</a></li>
                <li><a href="../noida/noida.html">PG in Noida</a></li>
                <li><a href="../pune/pune.html">PG in Pune</a></li>
                <li><a href="../hyderabad/hyderabad.html">PG in Hyderabad</a></li>
                <li><a href="../mumbai/mumbai.html">PG in Mumbai</a></li>
                <li><a href="../ahmedabad/ahmedabad.html">PG in Ahmedabad</a></li>

              </div>
            </div>
          </div>
          <div class="contact-row" id="contact-row">
            <div>
              <div class="one">
                <div style="margin-bottom: 10px;"><h4>Contact us</h4></div>
                <hr style="margin-bottom: 10px; width: 30%; height: 3px; background-color: blue;"/>
                <a style="text-decoration: none;">get.Housify@gmail.com</a>
              </div>
              <div class="two"> <p style="text-align: justify;">Don’t miss to subscribe to our new feeds, kindlyy fill the form below.</p></div>
               
              <div class="three" style="margin-top: 20px;">
                <div style="margin-bottom: 20px;"><h3>follow us</h3></div>
                <a><i class="fab fa-facebook-f facebook-bg i-1"></i></a>
                <a><i class="fab fa-twitter twitter-bg i-2"></i></a>
                <a><i class="fab fa-google-plus-g google-bg i-3"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer>
      <p>Copyrigth&copy;2024 All right Reserved</p>
    </footer>
</body>
</html>