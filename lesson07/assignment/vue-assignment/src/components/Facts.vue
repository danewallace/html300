<template>
  <div class="facts">
    <!-- Bootstrap Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="index.html"><span style='font-size:100px;'>&#128049;</span></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <div class="navbar-nav">
            <router-link class="nav-item nav-link active" to="/">Home</router-link>
            <router-link class="nav-item nav-link" to="/images">Images</router-link>
            <router-link class="nav-item nav-link" to="/facts">Facts<span class="sr-only">(current)</span></router-link>
            <router-link class="nav-item nav-link" to="/social">Social</router-link>
          </div>
        </div>
      </div>
    </nav>

    <!-- Page heading -->
    <h1 class="font-weight-light text-center text-lg-left mt-4 mb-0" style="margin-left: 1rem;">Cat facts</h1>

    <!-- Accordion container -->
    <div class="accordion" id="accordionExample">
      <!-- Accordion card with tooltip -->
      <div class="card" data-toggle="tooltip" data-placement="top" title="Click for more information.">
        <!-- Card header -->
        <div class="card-header" id="factOne">
          <h2 class="mb-0">
            <!-- Button to toggle card expand and collapse -->
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
              Cats Can Make Over 90 Different Sounds
            </button>
          </h2>
        </div>
        <div id="collapseOne" class="collapse " aria-labelledby="factOne" data-parent="#accordionExample">
          <!-- Card body content -->
          <div class="card-body">
            Meow! Grrrr! Hisss! These are some of the noises we typically associate with cats. One of the most surprising cat facts is that cats can actually make almost 100 different sounds. From the peeps of kittens to the meows of adults, cats have
            a wide range of vocalizations. Kittens typically meow to their mother for milk, but most adult cats are only known to meow in the presence of humans. Cat owners must be seen as cat parents after all!

            Scientific studies of the noises cats make have mostly centered on classifying the various sounds. Some scientists have sought to learn the truth behind one of the most mysterious cat facts – just how do cats purr? The rhythmic vibration of
            the purr comes from the cat’s throat, but, as yet, there is no agreement on how exactly the sound is made.

            Do you ever get the feeling your cats are talking to you? Maybe they are! Cats have been known to imitate the sounds of human babies in order to attract the attention of their owner. They can also recognize the sound of their owner’s voice.
            However, cats lack the advanced mental capabilities of humans that enable language. So don’t worry – you’re still smarter than your cat.
            <br>
            <br>
            <a href="https://interesting-facts.com/cat-facts/#more-than-meow-cats-can-make-over-90-different-sounds">Source</a>
          </div>
        </div>
      </div>
      <!-- Accordion card with tooltip-->
      <div class="card" data-toggle="tooltip" data-placement="top" title="Click for more information.">
        <!-- Card header -->
        <div class="card-header" id="factTwo">
          <h2 class="mb-0">
            <!-- Button to toggle card expand and collapse -->
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Lions, Tigers, Jaguars, and Leopards Purr Too
            </button>
          </h2>
        </div>
        <div id="collapseTwo" class="collapse" aria-labelledby="factTwo" data-parent="#accordionExample">
        <!-- Card body content -->
          <div class="card-body">
            When we think of purring, we often think of house cats, but big cats like cheetahs and mountain lions also purr. Even tigers, lions, jaguars, and leopards sometimes make a purr-like sound when they exhale. The roar of a lion is actually
            closely associated with the purring sound all cats make. The ability of one species of cat to purr and another species to roar is based on their anatomy, including specific features of the vocal folds and the length of the vocal tract.
            <br>
            <br>
            <a href="https://interesting-facts.com/cat-facts/#lions-tigers-jaguars-and-leopards-purr-too">Source</a>
          </div>
        </div>
      </div>
      <!-- Accordion card with tooltip -->
      <div class="card" data-toggle="tooltip" data-placement="top" title="Click for more information.">
        <!-- Card header -->
        <div class="card-header" id="factThree">
          <h2 class="mb-0">
              <!-- Button to toggle card expand and collapse -->
            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              There Are Exactly 24 Whiskers On Every Cat
            </button>
          </h2>
        </div>
        <!-- Card body content -->
        <div id="collapseThree" class="collapse" aria-labelledby="factThree" data-parent="#accordionExample">
          <div class="card-body">
            Cat’s whiskers are another amazing feature of their anatomy. There are exactly 24 whiskers on a cat, 12 on each side of their face. Cats use their whiskers for hunting and for sensing their surroundings. Veterinary neuroscientists have
            established some incredible cat facts relating to whiskers. A cat’s whiskers connect to a part of their brain that is similar to the visual cortex. This means that cats can almost see with their whiskers.

            When hunting in close quarters, a cat’s whiskers will point towards their prey. It’s also been shown that cats with damaged whiskers have difficulty catching their prey. Those whiskers are more than just a fashion statement! Cats also use
            their whiskers to sense whether or not they can fit into a tight space.
            <br>
            <br>
            <a href="https://interesting-facts.com/cat-facts/#more-than-meow-cats-can-make-over-90-different-sounds">Source</a>
          </div>
        </div>
      </div>
    </div>
    <!-- Accordion card with tooltip -->
    <div class="card" data-toggle="tooltip" data-placement="top" title="Click for more information.">
      <!-- Card header -->
      <div class="card-header" id="factFour">
        <h2 class="mb-0">
          <!-- Button to toggle card expand and collapse -->
          <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
            Milk Is Not Good For Cats! Most Cats Are Lactose Intolerant
          </button>
        </h2>
      </div>
      <!-- Card body content -->
      <div id="collapseFour" class="collapse" aria-labelledby="factFour" data-parent="#accordionExample">
        <div class="card-body">

          Some people think that feeding cats milk is good for them. This supposed cat fact is really a myth. Perhaps it’s all those cartoons we’ve seen featuring kittens lapping up milk from saucers, but cats are actually lactose intolerant and
          feeding them cow’s milk is not good for their digestive system.

          It’s true, however, that kittens need milk in order to survive. The best milk a kitten can have is the milk from its own mother. When a kitten is orphaned, there is special kitten formula you can use to ensure the kitten develops into a
          healthy adult cat. Despite the myth, cow’s milk doesn’t have the right set of nutrients to help a kitten grow. While some cats are not lactose intolerant, the very best thing for all cats to drink is fresh water.
          <br>
          <br>
          <a href="https://interesting-facts.com/cat-facts/#milk-is-not-good-for-cats-most-cats-are-lactose-intolerant">Source</a>
        </div>
      </div>
    </div>
  </div>
</template>
